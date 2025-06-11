import { Button } from "react-bootstrap";

export default function Recipe () {
   return ( 
   <div className="Recipe">
<img className="recipe-img-full" src="../../../public/images/fondant.jpeg" alt="" />
<h1>Fondant au chocolat sans Gluten</h1>
<section id="ingredients">
    <ul>
        <li><Button variant="primary">200 g</Button>Chocolat noir</li>
        <li><Button variant="primary">200 g</Button>Chocolat noir</li>
        <li><Button variant="primary">200 g</Button>Chocolat noir</li>
        <li><Button variant="primary">200 g</Button>Chocolat noir</li>
        <li><Button variant="primary">200 g</Button>Chocolat noir</li>
        <li><Button variant="primary">200 g</Button>Chocolat noir</li>
    </ul>
</section>
<section id="recipe-steps">
<ul>
    <li> faire-ci</li>
    <li> faire-ci</li>
    <li> faire-ci</li>
    <li> faire-ci</li>
    <li> faire-ci</li>
    <li> faire-ci</li>

</ul>
</section>
    </div>
   )
}