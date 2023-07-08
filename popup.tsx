import { Storage } from '@plasmohq/storage';
import { useStorage } from '@plasmohq/storage/hook';

const IndexPopup = () => {
  const [info, setInfo] = useStorage({
    key: 'lloyds-info',
    instance: new Storage({
      area: 'sync',
    }),
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
      }}
    >
      <h2>Set your lloyds memorable info here:</h2>
      <input onChange={(e) => setInfo(e.target.value)} value={info} />
    </div>
  );
};

export default IndexPopup;
