class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    self.next.prev = self.prev if self.next
    self.prev.next = self.next if self.prev
  end
end

class LinkedList
  include Enumerable
  
  def initialize
    @head = nil
    @tail = nil
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head
  end

  def last
    @tail
  end

  def empty?
    @head.nil? && @tail.nil?
  end

  def get(key)
    get_node(key).val if self.include?(key)
  end
  
  def get_node(key)
    node = @head
    target = nil
    while node
      target = node if node.key == key
      node = node.next
    end
    target
  end

  def include?(key)
    !!get_node(key)
  end

  def append(key, val)
    new_node = Node.new(key, val)
    if self.empty?
      @head = new_node
      @tail = new_node
    else
      prev_node = @tail
      prev_node.next = new_node
      new_node.prev = prev_node
      @tail = new_node
    end
    new_node
  end

  def update(key, val)
    get_node(key).val = val if self.include?(key)
  end

  def remove(key)
    get_node(key).remove if self.include?(key)
    @head = @head.next if @head.key == key
    @tail = @tail.prev if @tail.key == key
  end

  def each
    node = @head
    target = nil
    while node
      yield node
      node = node.next
    end
    self
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
