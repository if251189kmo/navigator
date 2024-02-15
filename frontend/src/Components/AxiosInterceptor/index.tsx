// logic
import { useInterceptor } from './hooks/useInterceptor';

// components
import Alerts from '../Alerts';
import Progress from '../Progress';

type AxiosInterceptorProps = {
  children: JSX.Element;
};

function AxiosInterceptor(props: AxiosInterceptorProps) {
  const { children } = props;
  useInterceptor();

  return (
    <Progress>
      <Alerts>{children}</Alerts>
    </Progress>
  );
}

export default AxiosInterceptor;
