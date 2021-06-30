import clsx from "clsx";
export default function Timeline({ children }) {
  return (
    <div className="container mx-auto w-full h-full mt-4">
      <div className="relative wrap overflow-hidden h-full">
        <div
          className="w-1 absolute bg-v-red opacity-75 h-full"
          style={{ left: "20%" }}
        ></div>
        <ul className="list-none m-0 p-0">{children}</ul>
      </div>
    </div>
  );
}

export const TimelineItem = ({ time, heading, children, align = "start" }) => {
  return (
    <li
      className={clsx(
        `items-${align}`,
        align === "end" ? "" : "mb-12",
        "flex w-full"
      )}
    >
      <div className="w-1/5 flex-0 text-gray-400 text-right leading-none pr-6">
        {time}
      </div>
      <div className="z-20 flex items-center w-5 h-5 bg-v-red shadow-xl rounded-full transform -translate-x-2 origin-center">
        <div className="z-30 w-3 h-3 m-auto bg-white  shadow-xl rounded-full" />
      </div>
      <div className="rounded-lg w-8/12 px-6">
        {heading && (
          <h3
            className={clsx(
              `${children ? "mb-3" : ""}`,
              "font-bold text-v-dark-blue text-xl leading-none"
            )}
          >
            {heading}
          </h3>
        )}
        <div className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          {children}
        </div>
      </div>
    </li>
  );
};

// <!-- left timeline -->
// <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
//   <div class="order-1 w-5/12"></div>
//   <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
//     <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
//   </div>
//   <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
//     <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
//     <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//   </div>
// </div>

// <!-- right timeline -->
// <div class="mb-8 flex justify-between items-center w-full right-timeline">
//   <div class="order-1 w-5/12"></div>
//   <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
//     <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
//   </div>
//   <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
//     <h3 class="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
//     <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//   </div>
// </div>

// <!-- left timeline -->
// <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
//   <div class="order-1 w-5/12"></div>
//   <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
//     <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
//   </div>
//   <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
//     <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
//     <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//   </div>
// </div>
