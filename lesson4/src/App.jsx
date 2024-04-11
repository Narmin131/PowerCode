
import { Select, Space } from 'antd';
function App() {
  return (
    <div className="App">
      <h1>salam</h1>
      <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      // onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
    </div>
  );
}

export default App;
