#pragma strict

var rotationSpeed = 100;
var jumpHeight = 8;

var hit : AudioClip;
var volume :float = 1;
var distToGround : float;

function Start ()
{
       //getting distans from ground
    distToGround = GetComponent.<Collider>().bounds.extents.y;
}

function IsGrounded() : boolean
{
    return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}

function Update () 
{
	//Handle ball rotation
	var rotation : float = Input.GetAxis ("Horizontal")*rotationSpeed;
	rotation *= Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	
	if (Input.GetKeyDown(KeyCode.W) && IsGrounded ())
	{
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}

}



function OnCollisionEnter () 
{
    GetComponent.<AudioSource>().clip = hit;
    //Debug.Log (-GetComponent.<Rigidbody>().velocity.y);
    GetComponent.<AudioSource>().volume = volume;
    GetComponent.<AudioSource>().Play();
}
