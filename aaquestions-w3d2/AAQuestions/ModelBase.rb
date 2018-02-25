require 'byebug'
class ModelBase

  def self.table
    raise 'needs a table!'
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT *
      FROM #{self.table}
      WHERE id = ?
    SQL

    data.map { |datum| self.new(datum)}.first
  end

  def self.all
    data = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT *
      FROM #{self.table}
    SQL

    data.map { |datum| self.new(datum)}
  end

  def save
    i_vars = self.instance_variables
    i_var_vals = i_vars.map { |var| self.instance_variable_get(var) }
    i_var_cols = i_vars[1..-1].map { |var| var.to_s.delete("@") }.join(",")
    i_var_placeholders = "#{Array.new(i_vars.length - 1, "?").join(",")}"

    unless i_var_vals[0].nil?
      QuestionsDatabase.instance.execute(<<-SQL, i_var_vals[1..-1] + [i_var_vals[0]])
      UPDATE #{self.class.table} (#{i_var_cols})
        VALUES
        (#{i_var_placeholders})
        WHERE
        id = ?
      SQL
    else
      QuestionsDatabase.instance.execute(<<-SQL, i_var_vals[1..-1])
        INSERT INTO #{self.class.table} (#{i_var_cols})
        VALUES
        (#{i_var_placeholders})
      SQL

      @id = QuestionsDatabase.instance.last_insert_row_id
    end
  end

end
