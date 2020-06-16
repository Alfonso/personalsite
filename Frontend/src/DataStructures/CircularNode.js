class CircularNode {
  constructor(next, prev, i){
    this.next = next;
    this.prev = prev;
    this.i = i;
  }

  static addTail(head ,i){
    let ptr = head;
    // get to the current tail
    while( ptr.next != null){
      ptr = ptr.next;
    }
    // create the new tail
    let tail = new CircularNode(head,ptr,i);
    // set heads prev
    head.prev = tail;

  }

  static addNext(curr, i){
    let ptr = new CircularNode(null, curr, i);
    curr.next = ptr;
  }

}
export default CircularNode;
