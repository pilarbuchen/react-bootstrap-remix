import { createBoard } from '@wixc3/react-board';
import MyBootstrapComponent from '../../../src/components/my-bootstrap-component/my-bootstrap-component';

export default createBoard({
    name: 'MyBootstrapComponent',
    Board: () => <MyBootstrapComponent />,
});
