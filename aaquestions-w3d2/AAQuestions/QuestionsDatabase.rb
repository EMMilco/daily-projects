require 'Singleton'
require 'SQLite3'
require_relative 'ModelBase'
require_relative 'User'
require_relative 'Question'
require_relative 'Reply'
require_relative 'QuestionLike'
require_relative 'QuestionFollow'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end
