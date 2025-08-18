import ClassComp2 from "./ClassComp2";

const CFunctionComp1 = () => {
  const Mobiledetails = "iPhone";
  const model = "iPhone 15 Pro";
  const brand = "Apple";
  const price = 149999;
  const storage = "256GB";
  const camera = " 48MP + 12MP + 12MP ";
  const battery = "4422mAh";
  return (
    <div>
      <h1>Functional component1</h1>
      <ClassComp2
        Mobiledetails={Mobiledetails}
        model={model}
        brand={brand}
        price={price}
        storage={storage}
        camera={camera}
        battery={battery}
      />
    </div>
  );
};

export default CFunctionComp1;
