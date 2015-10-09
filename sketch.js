function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// clear the background
	if (mouseIsPressed) {
		background(random(255, 0, 0));
	} else {
		background(0, 0, 50);

	}
	//grass ground
	fill(0, 80, 50);
	rect(0, 275, 640, 100);
	//tree
	fill(0, 40, 25);
	rect(0, 250, 640, 50);
	//triangle
	// for (var x = 0; x < 10; x++) {
	triangle(60, 100, 60, 20, 86, 75);
	// }

	//ufo
	fill(100, 100, 100);
	ellipse(mouseX, mouseY, 40, 60);
	ellipse(mouseX, mouseY + 20, 70, 40);
	// circle details
	fill(0, 0, 0);
	ellipse(mouseX, mouseY + 20, 5, 5);
	ellipse(mouseX - 20, mouseY + 20, 5, 5);
	ellipse(mouseX - 34, mouseY + 20, 5, 5);
	ellipse(mouseX + 20, mouseY + 20, 5, 5);
	ellipse(mouseX + 34, mouseY + 20, 5, 5);
	//background



}
