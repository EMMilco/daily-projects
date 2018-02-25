class PolyTreeNode
  attr_reader :parent
  attr_accessor :value, :children

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(new_parent)
    @parent.children.delete(self) unless @parent.nil?
    @parent = new_parent
    @parent.children << self unless @parent.nil?
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    raise "Invalid: Node is not a child of #{self}" unless children.include?(child)
    children.delete(child) unless children.empty?
    child.parent = nil
  end

  def bfs(target_value)
    queue = [self]
    until queue.empty?
      node = queue.shift
      return node if node.value == target_value
      queue += node.children
    end
    nil
  end

  def dfs(target_value)
    return self if value == target_value
    children.each do |child|
      found = child.dfs(target_value)
      return found if found
    end
    nil
  end
end
