require_relative 'p02_hashing'
require_relative 'p01_int_set'


class HashSet < ResizingIntSet
  # attr_reader :count
  # 
  # def initialize(num_buckets = 20)
  #   @store = Array.new(num_buckets) { Array.new }
  #   @count = 0
  # end
  # 
  # def insert(num)
  #   unless self.include?(num)
  #     self[num] << num 
  #     @count += 1
  #     self.resize! if @count > self.num_buckets
  #   end
  # end
  # 
  # def remove(num)
  #   self[num].delete(num)
  # end
  # 
  # def include?(num)
  #   self[num].include? num
  # end
  # 
  # # private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num.hash % num_buckets]
  end
  # 
  # def num_buckets
  #   @store.length
  # end
  # 
  # def inspect
  #   puts @store
  #   puts "store length: #{self.num_buckets}"
  # end
  # 
  # 
  # def resize!
  #   old_store = @store
  #   prev_num_buckets = self.num_buckets
  #   @count = 0
  #   @store = Array.new(prev_num_buckets * 2) { Array.new }
  #   old_store.flatten.each { |el| self.insert(el) }
  # end
end
