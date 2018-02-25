require 'byebug'

class MaxIntSet
  def initialize(max)
    @max = max
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" if num > @max || num < 0
    @store[num] = true      
  end

  def remove(num)
    raise "Out of bounds" if num > @max || num < 0
    @store[num] = false      
  end

  def include?(num)
    raise "Out of bounds" if num > @max || num < 0
    @store[num]      
  end

  private



end
class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num unless self.include?(num)
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include? num
  end

  private
  
  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    unless self.include?(num)
      self.resize! if @count == self.num_buckets
      self[num] << num 
      @count += 1
    end
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include? num
  end

  # private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
  
  def inspect
    puts @store
    puts "store length: #{self.num_buckets}"
  end
  

  def resize!
    old_store = @store
    prev_num_buckets = self.num_buckets
    @count = 0
    @store = Array.new(prev_num_buckets * 2) { Array.new }
    old_store.flatten.each { |el| self.insert(el) }
  end
end
