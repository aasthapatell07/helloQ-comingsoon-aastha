
// const Background = () => {
//   return (
//     <div className="background">
//       <img src="/logo1.png" alt="bg" />
//       <div className="overlay"></div>
//     </div>
//   );
// };

// export default Background;
const Background = () => {
  return (
    <div className="bg-container">
      <img src="/bg.png" alt="bg" className="bg-image" />

      {/* Gradient Layer */}
      <div className="gradient-overlay"></div>

      {/* Dark Layer */}
      <div className="dark-overlay"></div>
    </div>
  );
};

export default Background;