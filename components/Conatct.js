const Conatct = () => {
  return (
    <div className="bg-green-800">
      <div className="w-[80%] mx-auto py-20 flex items-center gap-8">
        <div className="w-1/2">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6101833231755!2d90.39586987516743!3d23.86797227859031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4249de6c4bb%3A0xdc53cb18cb983f75!2sTrust%20group!5e0!3m2!1sen!2sbd!4v1717960421610!5m2!1sen!2sbd"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 gp-6 mb-7">
            <div className="text-white text-sm font-extralight">
              <div className="flex items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>Rd 15, House, 07 Rabindra Sarani</div>
              </div>
              <div className="ml-6">
                <div></div>
                <div>Dhaka 1230</div>
              </div>
            </div>
            <div className="text-white text-sm font-extralight">
              <div className="flex items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>+880 1730-179117</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <div>info@trustgroupofcompany.com</div>
              </div>
            </div>
          </div>
          <from className="flex flex-col gap-4">
            <input
              className="outline-none px-6 py-3 text-xl font-extralight text-slate-700"
              placeholder="Name"
            />
            <input
              className="outline-none px-6 py-3 text-xl font-extralight text-slate-700"
              placeholder="Email"
            />
            <textarea
              rows={5}
              className="outline-none px-6 py-3 text-xl font-extralight text-slate-700"
              placeholder="Message"
            />
            <div>
              <button className="px-6 py-3 text-xl font-extralight bg-green-500 text-white transform translate duration-150 delay-150 border border-green-500 hover:bg-transparent hover:text-green-500">
                Send Message
              </button>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Conatct;
