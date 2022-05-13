let particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for(let i = 0; i < width / 5; i++){
        particles.push(new Particle());
    }
}

function draw() {
    background(0);
    for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        // particles[i].joinParticles(particles.slice(i));
    }
}

function Particle(){
    this.location = createVector(random(0, width),random(0, height));
    this.velocity = createVector(random(-2, 2),random(-1, 1.5));
    this.color = color(random(255),random(255),random(255));
    this.r = random(1, 8);
}

Particle.prototype.createParticle = function(){
    noStroke();
    fill(this.color);
    circle(this.location.x,this.location.y,this.r);
}

Particle.prototype.moveParticle = function(){
    if(this.location.x < 0 || this.location.x > width)
        this.velocity.x*=-1;
    if(this.location.y < 0 || this.location.y > height)
        this.velocity.y*=-1;
    this.location.add(this.velocity);
}

Particle.prototype.joinParticles = function(particles){
    particles.forEach(element =>{
        let dis = dist(this.location.x,this.location.y,element.location.x,element.location.y);
        if(dis < width / 18) {
            stroke(this.color);
            line(this.location.x,this.location.y,element.location.x,element.location.y);
        }
    });
}