require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    cookie = req.cookies['_rails_lite_app']
    if cookie
      @cookie_contents = JSON.parse(cookie)
    else
      @cookie_contents = {}
    end
  end

  def [](key)
    @cookie_contents[key]
  end

  def []=(key, val)
    @cookie_contents[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    res.set_cookie('_rails_lite_app', JSON.generate(@cookie_contents))
  end
end
