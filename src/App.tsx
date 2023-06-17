import { useState } from "react";
import "./App.css";

type Point = {
  x: number;
  y: number;
};

function App() {
  const [points, setPoints] = useState<Point[]>([]);
  const [deletedPoints, setDeletedPoints] = useState<Point[]>([]);

  const handleDrawCircle = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const coordinates = {
      x: clientX,
      y: clientY,
    };
    setPoints([...points, coordinates]);
  };

  const handleDeleteCircles = () => {
    setPoints([]);
  };

  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPoints(newPoints);
    setDeletedPoints([...deletedPoints, poppedPoint]);
  };

  const handleRedo = () => {
    const poppedPoints = [...deletedPoints];
    const poppedPoint = poppedPoints.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setDeletedPoints(poppedPoints);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleDeleteCircles}
        disabled={points.length > 0 ? false : true}
      >
        Delete Circles
      </button>
      <button type="button" onClick={handleUndo} disabled={points.length === 0}>
        Undo
      </button>
      <button
        type="button"
        onClick={handleRedo}
        disabled={
          deletedPoints.length > 0 && points.length !== 0 ? false : true
        }
      >
        Redo
      </button>
      <div className="wrapper" onClick={handleDrawCircle}>
        {points.map((point, index) => (
          <span
            key={index}
            className="circle"
            style={{ left: point.x + "px", top: point.y - 42 + "px" }}
          >
            {index}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
