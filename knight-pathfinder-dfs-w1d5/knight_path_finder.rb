require "byebug"
class KnightPathFinder
attr_reader :visited_coords
# positions are nodes
# coords are x,y pairs

  def initialize(coord)
    @root_node = Node.new(coord)
    @visited_coords = []
    @visited_coords << coord
    build_move_tree
  end

  def self.valid_moves(coord)
    x, y = coord
    moves = [[x-1, y+2],
             [x+1, y+2],
             [x+2, y+1],
             [x+2, y-1],
             [x+1, y-2],
             [x-1, y-2],
             [x-2, y-1],
             [x-2, y+1]]
    valid = moves.select { |el| el.first.between?(0,7) && el.last.between?(0,7) }
    valid.map { |coord| Node.new(coord) }
  end

  def build_move_tree
    queue = [@root_node]
    until queue.empty?
      node = queue.shift
      children = new_move_positions(node.value)
      children.each do |el|
        node.add_child(el)
        el.parent = node
        queue << el
      end
    end
  end

  def find_path(target_value)
    target_node = @root_node.dfs(target_value)
    path = []
    parent = target_node
    while parent
      path.unshift(parent)
      parent = path.first.parent
    end
    path.map { |node| node.value }
  end



  def new_move_positions(coord)
    possible = self.class.valid_moves(coord).reject { |move| @visited_coords.include?(move.value) }
    @visited_coords += possible.map { |move| move.value }
    possible
  end
end

class Node
  attr_reader :parent
  attr_accessor :children, :value

  def initialize(value)
    @parent = nil
    @children = []
    @value = value
  end

  def parent=(new_parent)
    parent.children.delete(self) unless parent.nil?
    @parent = new_parent
    unless new_parent.nil? || parent.children.include?(self)
      parent.children << self
    end
  end

  def add_child(node)
    children.push(node) unless children.include?(node)
    node.parent = self
  end

  def remove_child(node)
    raise "The node is not the child" unless children.include?(node)
    children.delete(node)
    node.parent = nil
  end

  def dfs(target)
    return self if self.value == target
    children.each do |child|
      child_path = child.dfs(target)
      return child_path if child_path
    end
    nil
  end

  def dfs(target)
    stack = [self]
    until stack.empty?
      node = stack.pop
      return node if node.value == target
      stack += node.children
    end
    nil
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
end
