// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
//  Include two methods to calculate rectangle area and perimeter.
//  Create an instance of the 'Rectangle' class and calculate its area and perimeter.


class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
        
    }
    display(){

            let a=this.height;
            let b=this.width; 
            let c=a*b;
            let d=(2*(a+b)); 
        console.log(`the given width is ${this.width}`);
        console.log(`the given height of is ${this.height}`)
        console.log(`the value of the rectangle is ${c}`)
        console.log(`the value of the perimeter is ${d}`)
    }
}
let a=new Rectangle(10,29);
let b=new Rectangle(25,33);
a.display();
b.display();