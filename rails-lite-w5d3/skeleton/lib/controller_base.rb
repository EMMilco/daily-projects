require 'active_support'
require 'active_support/core_ext'
require 'active_support/inflector'
require 'erb'
require_relative './session'
require 'byebug'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res, route_params = {})
    @req = req
    @res = res
    @req.params.merge!(route_params)
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    !!@already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    raise "Double Render Exception" if already_built_response?
    res['Location'] = url
    res.status = 302
    self.session.store_session(@res)
    @already_built_response = true
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise "Double Render Exception" if already_built_response?
    @res.write(content)
    @res['Content-Type'] = content_type
    self.session.store_session(@res)
    @already_built_response = true
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    raise "Double Render Exception" if already_built_response?
    path_to_template = "views/#{self.class.name.underscore}/#{template_name}.html.erb"
    template = ERB.new(File.read(path_to_template)).result(binding)
    render_content(template, 'text/html')
    self.session.store_session(@res)
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(@req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name) unless already_built_response?
  end
end
