
const IconCashBanknotes = ({ className, fill = false, duotone = true }) => {
    return (
        <>
            {!fill ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        d="M2 10C2 7.17157 2 5.75736 2.87868 4.87868C3.75736 4 5.17157 4 8 4H13C15.8284 4 17.2426 4 18.1213 4.87868C19 5.75736 19 7.17157 19 10C19 12.8284 19 14.2426 18.1213 15.1213C17.2426 16 15.8284 16 13 16H8C5.17157 16 3.75736 16 2.87868 15.1213C2 14.2426 2 12.8284 2 10Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M19.0003 7.07617C19.9754 7.17208 20.6317 7.38885 21.1216 7.87873C22.0003 8.75741 22.0003 10.1716 22.0003 13.0001C22.0003 15.8285 22.0003 17.2427 21.1216 18.1214C20.2429 19.0001 18.8287 19.0001 16.0003 19.0001H11.0003C8.17187 19.0001 6.75766 19.0001 5.87898 18.1214C5.38909 17.6315 5.17233 16.9751 5.07642 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M13 10C13 11.3807 11.8807 12.5 10.5 12.5C9.11929 12.5 8 11.3807 8 10C8 8.61929 9.11929 7.5 10.5 7.5C11.8807 7.5 13 8.61929 13 10Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path opacity={duotone ? '0.5' : '1'} d="M16 12L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path opacity={duotone ? '0.5' : '1'} d="M5 12L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        d="M8.50573 10.7144C8.50573 9.79392 9.2609 9.04772 10.1924 9.04772C11.124 9.04772 11.8792 9.79392 11.8792 10.7144C11.8792 11.6349 11.124 12.3811 10.1924 12.3811C9.2609 12.3811 8.50573 11.6349 8.50573 10.7144Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 10.7143C2 8.02057 2 6.67369 2.84691 5.83684C3.69381 5 5.05688 5 7.78303 5H12.6022C15.3284 5 16.6914 5 17.5384 5.83684C18.3853 6.67369 18.3853 8.02057 18.3853 10.7143C18.3853 13.4081 18.3853 14.755 17.5384 15.5918C16.6914 16.4287 15.3284 16.4287 12.6022 16.4287H7.78303C5.05688 16.4287 3.69381 16.4287 2.84691 15.5918C2 14.755 2 13.4081 2 10.7143ZM7.05997 10.7144C7.05997 9.00494 8.46243 7.61914 10.1924 7.61914C11.9225 7.61914 13.3249 9.00494 13.3249 10.7144C13.3249 12.4239 11.9225 13.8097 10.1924 13.8097C8.46243 13.8097 7.05997 12.4239 7.05997 10.7144ZM4.16846 12.6192C4.16846 13.0137 4.4921 13.3335 4.89134 13.3335C5.29057 13.3335 5.61422 13.0137 5.61422 12.6192L5.61421 8.80963C5.61421 8.41513 5.29057 8.09534 4.89134 8.09534C4.4921 8.09534 4.16846 8.41513 4.16846 8.80963L4.16846 12.6192ZM15.4936 13.3335C15.0943 13.3335 14.7707 13.0137 14.7707 12.6192V8.80963C14.7707 8.41513 15.0943 8.09534 15.4936 8.09534C15.8928 8.09534 16.2164 8.41513 16.2164 8.80963V12.6192C16.2164 13.0137 15.8928 13.3335 15.4936 13.3335Z"
                        fill="currentColor"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M4.06543 16.225C4.07847 16.3759 4.09413 16.5205 4.11294 16.6587C4.22958 17.516 4.47911 18.2378 5.05926 18.811C5.14186 18.8926 5.2275 18.9676 5.31614 19.0366C5.88152 19.5505 6.58194 19.7785 7.40608 19.888C8.24169 19.999 9.30415 19.999 10.6223 19.999H15.5473C16.8654 19.999 17.9279 19.999 18.7635 19.888C19.631 19.7727 20.3615 19.5262 20.9417 18.9529C21.5218 18.3796 21.7713 17.6579 21.888 16.8006C22.0003 15.9749 22.0003 14.9251 22.0003 13.6226V13.5181C22.0003 12.2156 22.0003 11.1658 21.888 10.3401C21.7713 9.48282 21.5218 8.76103 20.9417 8.18777C20.8591 8.10616 20.7734 8.03117 20.6848 7.96223C20.1194 7.44827 19.419 7.22028 18.5948 7.1108C18.464 7.09342 18.3277 7.07877 18.1857 7.06641C18.3854 7.8998 18.3854 9.04993 18.3854 10.7142C18.3854 13.4079 18.3854 14.7548 17.5385 15.5916C16.6916 16.4285 15.3285 16.4285 12.6024 16.4285H7.78317C6.08148 16.4285 4.91089 16.4285 4.06543 16.225Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </>
    );
};

export default IconCashBanknotes;
