import { Button, Picker } from "antd-mobile";
import yayJpg from '../assets/yay.jpg';
export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <Picker closeOnMaskClick columns={[
        [
          { value: 1, label: 1 }
        ]
      ]} >
        {
          (items, action) => {
            return <Button onClick={() => {
              action.open()
            }}>打开picker</Button>
          }
        }
      </Picker>
    </div>
  );
}
