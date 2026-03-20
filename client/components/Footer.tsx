export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f8fafc] to-[#f0f4f8] border-t border-gray-100 py-14">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
          {/* Phone */}
          <a href="tel:5085551234" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0072D5]/10 to-[#00a4ff]/10 flex items-center justify-center group-hover:from-[#0072D5]/20 group-hover:to-[#00a4ff]/20 transition-all">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_footer_phone)">
                  <path d="M5.94144 0.873101C6.54274 0.869139 7.12512 1.08316 7.58118 1.47533C7.98196 1.82001 8.26177 2.28167 8.38196 2.79248L8.4233 3.01457L8.42413 3.02186L8.46471 3.29745C8.56747 3.93661 8.73272 4.56445 8.95915 5.17143L9.01583 5.34002C9.13361 5.73755 9.15054 6.15906 9.06364 6.56638C8.96437 7.03192 8.73372 7.45912 8.39898 7.7976L8.39574 7.80165L7.80164 8.39498C8.77762 9.92625 10.0768 11.2244 11.608 12.2005L12.2054 11.6039L12.3367 11.484C12.6516 11.2142 13.0292 11.0262 13.4366 10.9393C13.9013 10.8402 14.3849 10.8763 14.8299 11.043C15.4375 11.2698 16.0664 11.4363 16.7063 11.5391L16.9811 11.5788L16.9884 11.5796C17.5931 11.6649 18.1458 11.9696 18.5406 12.4356C18.9309 12.8962 19.139 13.4833 19.1291 14.0866L19.1299 16.5734L19.1274 16.7031C19.1129 17.0054 19.0431 17.3029 18.9216 17.5809C18.7826 17.8986 18.5788 18.1838 18.3234 18.4182C18.0679 18.6525 17.7666 18.8316 17.4383 18.9426C17.1509 19.0398 16.8482 19.083 16.5458 19.0715L16.4161 19.0634C16.4111 19.063 16.4057 19.0623 16.4008 19.0618C13.7179 18.7702 11.1407 17.8537 8.87639 16.3854C6.77114 15.0462 4.98585 13.26 3.64759 11.1541C2.17649 8.88103 1.26039 6.2931 0.974413 3.60059L0.972786 3.58763C0.941686 3.24343 0.983286 2.89629 1.09356 2.56877C1.20389 2.24119 1.38091 1.93975 1.61393 1.68446C1.84699 1.42915 2.13096 1.22514 2.44717 1.08547C2.76331 0.945853 3.10503 0.873435 3.45064 0.873101L5.94144 0.873101Z" fill="#0072D5"/>
                </g>
                <defs>
                  <clipPath id="clip0_footer_phone">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-base text-[#565D6D] group-hover:text-[#0072D5] transition-colors font-medium">
              (508) 555-1234
            </span>
          </a>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center mb-8">
          <a
            href="https://instagram.com/kepler.ep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center hover:bg-[#0072D5] hover:border-[#0072D5] group transition-all shadow-sm hover:shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7L3 17C3 19.2091 4.79086 21 7 21L17 21C19.2091 21 21 19.2091 21 17L21 7ZM23 17C23 20.3137 20.3137 23 17 23L7 23C3.68629 23 1 20.3137 1 17L1 7C1 3.68629 3.68629 1 7 1L17 1C20.3137 1 23 3.68629 23 7L23 17ZM9.74052 7.51817C10.6739 7.0339 11.7365 6.85613 12.7766 7.01036L12.9749 7.04454C13.9599 7.23133 14.8673 7.71042 15.5784 8.42149C16.337 9.18005 16.8322 10.1621 16.9895 11.2232L17.014 11.4186C17.1198 12.3958 16.9357 13.3843 16.4817 14.2594C15.9974 15.1928 15.2306 15.9496 14.2913 16.4225C13.352 16.8952 12.2875 17.0601 11.2493 16.8932C10.211 16.7261 9.25175 16.2354 8.50809 15.4918C7.76444 14.7481 7.27381 13.7889 7.10673 12.7506C6.93975 11.7124 7.10467 10.6479 7.57743 9.7086C8.05026 8.7693 8.80709 8.00251 9.74052 7.51817ZM12.4837 8.98888C11.8595 8.89632 11.2215 9.00294 10.6614 9.29356C10.1013 9.58419 9.64726 10.0444 9.36356 10.608C9.07991 11.1716 8.98111 11.8103 9.08134 12.4332C9.18158 13.0562 9.47597 13.6315 9.92216 14.0777C10.3683 14.5239 10.9437 14.8183 11.5667 14.9186C12.1896 15.0188 12.8283 14.92 13.3919 14.6363C13.9555 14.3526 14.4157 13.8986 14.7063 13.3385C14.9606 12.8485 15.0739 12.2992 15.0364 11.7516L15.011 11.5162C14.9166 10.8796 14.6194 10.2906 14.1643 9.83555C13.7662 9.43739 13.2655 9.16009 12.72 9.0338L12.4837 8.98888ZM17.5098 5.5L17.6123 5.50488C18.1165 5.55611 18.5098 5.98224 18.5098 6.5C18.5098 7.01776 18.1165 7.44389 17.6123 7.49512L17.5098 7.5H17.5C16.9477 7.5 16.5 7.05228 16.5 6.5C16.5 5.94772 16.9477 5.5 17.5 5.5H17.5098Z" fill="#565D6D" className="group-hover:fill-white transition-colors" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

        {/* Copyright */}
        <p className="text-sm text-[#9095A0] text-center mb-2">
          &copy; 2024 Fall River Laundry Love. All rights reserved.
        </p>

        {/* Creator Credit */}
        <p className="text-xs text-[#9095A0] text-center">
          Made with care by Kepler Pierre &middot;{' '}
          <a href="mailto:name.of.kepler@gmail.com" className="hover:text-[#0072D5] transition-colors">
            name.of.kepler@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
