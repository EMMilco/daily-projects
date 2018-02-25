class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    self.map.with_index { |el,i| el.hash * (i + 1)}.reduce(0, :+)
  end
end

class String
  def hash
    self.chars.map(&:ord).hash#.map.with_index { |el, i| el.ord * (i + 1) }.reduce(0, :+)
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    # h = 
    self.to_a.sort.hash
    # .map do |pair|
    #   p = pair.map do |sym, val| 
    #     sym.to_s.hash + val.hash
    #   end
    #   p.hash
    # end
    # h.hash
  end
end
