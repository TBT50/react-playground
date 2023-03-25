import { ReactNode } from "react";

// interface AlertButtonProps {
//   message: string;
//   children: ReactNode;
// }
const Button = ({ onClick, children }: any) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

interface PlayButtonProps {
  moviename: string;
}

const PlayButton = ({ moviename }: PlayButtonProps) => {
  const handleClick = () => {
    alert(`PLAYING... ${moviename}`);
  };
  return <Button onClick={handleClick}>Play movie</Button>;
};

const UploadButton = () => {
  const handleClick = () => {
    alert("Uploading...");
  };
  return <Button onClick={handleClick}>Upload</Button>;
};

const App = () => {
  return (
    <div>
      <PlayButton moviename="Spider Man" />
      <UploadButton />
    </div>
  );
};

export default App;
