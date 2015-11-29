#pragma strict

var maxFallDistance = -10;
private var isRestarted = false;
var GameOverSound : AudioClip; 

function Update () 
{
	if (transform.position.y <= maxFallDistance && isRestarted == false)
	{
		RestartLevel();
	}
}

function RestartLevel () 
{
	isRestarted = true;
	GetComponent.<AudioSource>().clip = GameOverSound;
	GetComponent.<AudioSource>().volume = 1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	Application.LoadLevel("level1");
}