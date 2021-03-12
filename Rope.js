class Rope{
	constructor(body1, body2, o1, o2)
	{
	 var options = {
		 bodyA:body1,
		 bodyB:body2,
		 pontB:{
		  x:o1,
		  y:o2
		 }
	 }
	 this.rope = Constraint.create(options)
	 World.add(world,this.rope)
	 this.o1 = o1
	 this.o2 = o2
	}

	display()
	{
	 var posA = this.rope.bodyA.position
	 var posB = this.rope.bodyB.position
	 line(posA.x,posA.y,posB.x+this.o1,posB.y+this.o2)
	}

}