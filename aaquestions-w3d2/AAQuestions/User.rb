class User < ModelBase
  def self.table
    'users'
  end

  def self.find_by_name(fname, lname)
    data = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
    SELECT *
    FROM users
    WHERE fname = ? AND lname = ?
    SQL
    data.map { |datum| User.new(datum)}.first

  end

  attr_accessor :fname, :lname
  attr_reader :id

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions
    Question.find_by_author_id(@id)
  end

  def authored_replies
    Reply.find_by_user_id(@id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(@id)
  end

  def liked_questions
    QuestionLike.liked_questions_for_user_id(@id)
  end

  def average_karma
    data = QuestionsDatabase.instance.execute(<<-SQL, @id, @id)
      SELECT CAST(COUNT(question_likes.id) as float) / (
        SELECT CAST(COUNT(questions.id) as float)
        FROM questions
        WHERE author_id = ?
      ) AS avg_karma
      FROM question_likes
      JOIN questions ON questions.id = question_likes.question_id
      WHERE questions.author_id = ?
    SQL

    data.first['avg_karma']
  end
end
