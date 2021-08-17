import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import { DefaultButton } from './components/Buttons'

function App() {
  return (
    <div>
      <BasicTitle>styled components</BasicTitle>
      <BasicTitle red>styled components</BasicTitle>
      <BasicTitle blue>styled components</BasicTitle>
      <BasicTitle purple>styled components</BasicTitle>
      <DefaultButton>Click Me!</DefaultButton>
    </div>
  );
}

export default App;
