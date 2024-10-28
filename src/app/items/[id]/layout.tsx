const ItemsLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex items-center">
        <div className="w-1200pxr h-screen mx-auto bg-white">
            <div className="max-w-996pxr mx-auto flex flex-col px-24pxr sm:px-16pr">
                {children}
            </div>
        </div>
    </div>;
};

export default ItemsLayout;