require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  attr_reader :count
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    if @map.include?(key) 
      node = @map[key]
      update_node!(node)
    else
      eject!
      calc!(key)
    end
    @map[key].val
    
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key
    computed_val = @prc.call(key)
    @store.append(key, computed_val)
    @map[key] = @store.get_node(key)
  end

  def update_node!(node)
    # suggested helper method; move a node to the end of the list
    #update the node's position in the linked list (remove and append)
    
    @store.remove(node.key)
    @map[node.key] = @store.append(node.key, node.val)

  end

  def eject!
    if self.count == @max
      old_head = @store.first
      @store.remove(old_head.key)
      @map.delete(old_head.key)
    end
    #check if @map.length == @max, if it does, delete head from 
    # @map and from @store
  end
end
