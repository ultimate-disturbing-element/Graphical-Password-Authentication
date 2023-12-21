import image10 from "../../Assets/images/10.png"
import image11 from "../../Assets/images/11.png"
import image12 from "../../Assets/images/12.png"
import image13 from "../../Assets/images/13.png"
import image14 from "../../Assets/images/14.png"
import image15 from "../../Assets/images/15.png"
import image16 from "../../Assets/images/16.png"
import image17 from "../../Assets/images/17.png"
import image18 from "../../Assets/images/18.png"
import image19 from "../../Assets/images/19.png"
import image20 from "../../Assets/images/20.png"
import image21 from "../../Assets/images/21.png"
import image22 from "../../Assets/images/22.png"
import image23 from "../../Assets/images/23.png"
import image24 from "../../Assets/images/24.png"

// Fisher-Yates shuffle function
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

export const ImageJson = [
// Suffle Image Positions
    {image:image10,value:"1"},
    {image:image11,value:"2"},
    {image:image12,value:"3"},
    {image:image13,value:"4"},
    {image:image14,value:"5"},
    {image:image15,value:"6"},
    {image:image16,value:"7"},
    {image:image17,value:"8"},
    {image:image18,value:"9"},
    {image:image19,value:"10"},
    {image:image20,value:"11"},
    {image:image21,value:"12"},
    {image:image22,value:"13"},
    {image:image23,value:"14"},
    {image:image24,value:"15"},
]

shuffleArray(ImageJson);