//declaring variables 
let slider1; 
let slider2; 
let slider3; 
let slider4; 
let input1; 
let input2; 
let radio1; 
let dropdown1;
let w=400; 
let h=400; 
let fontchoice; 

let fontOptions = {
  "Arial" : "Arial, sans-serif",
  "Times New Roman" : "Times New Roman, serif",
  "Courier New" : "Courier New, monospace"
}

function preload() {
  image1= loadImage("./Arya-Atul-Gohad_ProgrammingAsPrototyping/a2/Gru.jpg")
  image2= loadImage("./Arya-Atul-Gohad_ProgrammingAsPrototyping/a2/shrek.jpg")
  image3= loadImage("./Arya-Atul-Gohad_ProgrammingAsPrototyping/a2/spongebob.png")
  image4= loadImage("./Arya-Atul-Gohad_ProgrammingAsPrototyping/a2/toystory.jpeg")
}


function setup() {
    let cnv = createCanvas(w,h);
    cnv.parent('column-two'); //sets <div id="column-two"></div> as parent container of the canvas
    let btn= createButton('Save Image'); 
    btn.mousePressed(saveimg); // created function
    function saveimg() {
      saveCanvas(cnv, 'MyCanvas', 'jpeg') // recalled the above function- selectedcanvas, filename, extention 
    }
    
    // Assign all your input elements the parent - 'column-one'

    let c=createP('Select desired Image:');
    c.parent('column-one');
    c.class('general');
    c.id('i1'); // assigns id 'i1' to element

    let dropdown1 = createSelect();
    dropdown1.parent('column-one');
    dropdown1.class('general');
    dropdown1.id('dd');//assigns id 'dd' to element

    dropdown1.option('Select Here','') //null value so that inital canvas appears white 
    dropdown1.option("image1");
    dropdown1.option("image2");
    dropdown1.option("image3");
    dropdown1.option("image4");

    function changeImage()
   {
    let choice = dropdown1.value();
    meme = loadImage("images/"+choice+".jpeg");
  }
  //stores the selection and loads it into "meme"
   dropdown1.changed(changeImage) //.changed is called when the value of a function changes

   let c1=createP('Select desired Font:');
   c1.parent('column-one');
   c1.class('general');

   radio1=createRadio()
   radio1.parent('column-one');
   radio1.id('r');
   radio1.class('general');
   radio1.option('Arial');
   radio1.option('Courier New');
   radio1.option('Times New Roman');
   
   radio1.changed(updateFont) //.changed is called when the valye of a function changes
   updateFont() //function to update the main global variable with the user's choice
 

   let c2=createP('Enter desired Text:');
   c2.parent('column-one');
   c2.class('general'); //writing the text printed above the input bar and defining the specifics

   input1=createInput("");
   input1.parent('column-one');
   input1.class('general');
   input1.id('IID'); //creating an input and defining the specifics

   let c3=createP('(Optional) Enter desired Text:');
   c3.parent('column-one');
   c3.class('general'); //writing the text printed above the input bar and defining the specifics
  
   input2=createInput("");
   input2.parent('column-one');
   input2.class('general');
   input2.id('IID2'); //creating a second input and defining the specifics
 
  let c4=createP('Value of R:')
    c4.parent('column-one')
    c4.class('general')
    slider1=createSlider(0,255,100) 
    slider1.parent('column-one')
    slider1.class('general') //creating a slider for Red Value and defining the specifics

   
   let c5=createP('Value of G:')
    c5.parent('column-one')
    c5.class('general') 
    slider2=createSlider(0,255,100)
    slider2.parent('column-one')
    slider2.class('general') //creating a slider for Green Value and defining the specifics

   
   let c6=createP('Value of B:')
   c6.parent('column-one')
   c6.class('general') 
   slider3=createSlider(0,255,100)
   slider3.parent('column-one')
   slider3.class('general') //creating a slider for Blue Value and defining the specifics
   
   let c7=createP('Desired Font-Size:')//text printed above the slider
   c7.parent('column-one')
   c7.class('general') 
   slider4= createSlider(12,48,18)
   slider4.parent('column-one')
   slider4.class('general') //creating a slider for font size and defining the specifics
   
   function updateFont()
{
  fontchoice = fontOptions[radio1.value()]
}

}
//function to store the selected font

  function draw() {
    background('white'); 
    let valR = slider1.value();
    let valG = slider2.value();
    let valB = slider3.value();
    let val4 = slider4.value();
    let valI1 = input1.value();
    let valI2 = input2.value();

    if(meme){
      image(meme, w/4, h/4, 350, 250); 
      }
    
      fill(valR,valG,valB)
    
      textFont(fontchoice+'')//assigns the font to the text. has to be in single quotes so follow the syntax
    
      textSize(val4);
    
      text(valI1, 20, 40);
      text(valI2, 20, 350);
  }

  
  
