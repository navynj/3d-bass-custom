import { useProgress } from '@react-three/drei';

const LoadingProgress = () => {
  const { progress } = useProgress();
  return (
    progress !== 100 && (
      <div className="progress">
        <div>
          <p>Loading&nbsp;&nbsp;&nbsp;{progress.toFixed(2)}%</p>
          <div className="bar">
            <div className="current" style={{ width: progress + '%' }} />
          </div>
        </div>
      </div>
    )
  );
};

export default LoadingProgress;
