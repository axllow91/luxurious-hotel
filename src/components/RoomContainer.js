import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomList from "./RoomList";
import RoomsFilter from "./RoomsFilter";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}                                               
  
export default withRoomConsumer(RoomContainer);

// import React, { Component } from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// export default class RoomContainer extends Component {
//   render() {
//     return (
//       <RoomConsumer>
//         {value => {
//           const { loading, sortedRooms, rooms } = value;
//           if(loading) {
//             return <Loading />
//           }
//           return (
//             <div>
//               Room container
//               <RoomsFilter rooms={rooms} />
//               <RoomList rooms={sortedRooms} />
//             </div>
//           );
//         }}
//       </RoomConsumer>
//     );
//   }
// }
