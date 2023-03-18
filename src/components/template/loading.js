import styles from "@/styles/template/Post/posts.module.css";
export default function Loading() {
    return (
        <div
                className={`${styles.blog} flex flex-col bg-[#171717] mb-4 rounded-lg shadow-sm animate-pulse`}
              >
                <div className="flex flex-row p-4 pb-1">
                  <div className="bg-[#a8201a]/20 rounded-full h-[40px] w-[40px] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col space-x-2 space-y-2">
                    <div className="bg-[#a8201a]/20 w-40 h-3 mt-2 ml-2 rounded-lg"></div>
                    <div className="bg-[#a8201a]/20 w-60 h-2.5 rounded-lg"></div>
                  </div>
                </div>
                <div className="px-10 py-3 space-y-2 justify-center items-center">
                  <div className="bg-[#a8201a]/20 w-5/5 h-4 rounded-lg"></div>
                  <div className="bg-[#a8201a]/20 w-4/5 h-4 rounded-lg"></div>
                  <div className="flex gap-5 items-center w-2/3 pt-4">
                    <div className="bg-[#a8201a]/20 w-20 h-3 rounded-sm items-end"></div>
                    <div className="bg-[#a8201a]/20 w-20 h-3 rounded-sm px-5 items-end"></div>
                  </div>
                </div>
              </div>
    );
}