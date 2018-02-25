class QuestionFollow
  attr_reader :id, :question_id, :user_id

  def self.followers_for_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT user_id
      FROM question_follows
      WHERE question_id = ?
    SQL

    data.map {|datum| User.find_by_id(datum['user_id'])}
  end

  def self.followed_questions_for_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT question_id
      FROM question_follows
      WHERE user_id = ?
    SQL

    data.map {|datum| Question.find_by_id(datum['question_id'])}
  end

  def self.most_followed_questions(n)
    data = QuestionsDatabase.instance.execute(<<-SQL, n)
      SELECT questions.id, questions.title, questions.body, questions.author_id --, COUNT(question_follows.question_id) AS follows
      FROM questions
      JOIN question_follows ON questions.id = question_follows.question_id
      GROUP BY questions.id
      ORDER BY COUNT(question_follows.question_id) DESC
      LIMIT ?
    SQL
    data.map { |datum| Question.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end


end
