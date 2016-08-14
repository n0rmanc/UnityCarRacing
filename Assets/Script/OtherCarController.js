#pragma strict

private var rb : Rigidbody;
public var speed : int;

function Start () {

	rb = gameObject.GetComponent(Rigidbody) as Rigidbody;
	var movement: Vector3 = new Vector3 (0, 0, speed * -1);
	rb.AddForce(movement);

}

function Update () {
	
}
