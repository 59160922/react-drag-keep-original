import React,{ useState,useEffect } from "react";
import "./App.css";


function App() {
  const [displaySection, setDisplaySection] = useState<section[]>([])

  useEffect(() => {
    console.log(displaySection);
    
  }, [displaySection])

  enum section {
    pattern1 ='pattern1',
    pattern2 ='pattern2',
    pattern3 ='pattern3',
  }

  function dragStart(event: any) {
    event.dataTransfer.setData("Text", event.target.id);

  
  }

  function allowDrop(event: any) {
    event.preventDefault();
  }

  function drop(ev: any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    console.log(data);
    
    switch(data){
      case (section.pattern1):
       setDisplaySection([...displaySection,section.pattern1])
        break;
      case (section.pattern2):
        setDisplaySection([...displaySection,section.pattern2])
        break;  
      case (section.pattern3):
        setDisplaySection([...displaySection,section.pattern3])
        break;  
    }
    
     ev.target.appendChild(document.getElementById(data)?.cloneNode(true));
  }

  return (
    <div>
      <div
        className="droptarget"
        onDrop={drop}
        onDragOver={allowDrop}
     
      >
        <p onDragStart={dragStart} draggable="true" id="pattern1">
          Pattern1
        </p>
        <p onDragStart={dragStart} draggable="true" id="pattern2">
          Pattern2
        </p>
        <p onDragStart={dragStart} draggable="true" id="pattern3">
          Pattern3
        </p>
      </div>

      <div
        className="droptarget drop-receive"
        onDrop={drop}
        onDragOver={allowDrop}
      ></div>
    </div>
  );
}

export default App;
