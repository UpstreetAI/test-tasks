# React based WASM WebGL example

This is an example of a wasm WebGL module based on react. It uses GLFW to create and draw a webgl es3.0 screen in C++, and binds the corresponding canvas when the wasm module is initialized in React.

## C++ part

The C++ part is a cmake project that can theoretically be compiled with the following code

```shell
$ mkdir build
$ cd build
$ emcmake cmake ..
```

emcmake just adds two cmake compilation parameters, so you can directly set the cmake configure parameters

```shell
$ cmake -DCMAKE_TOOLCHAIN_FILE=/home/xiaobaigou/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake -DCMAKE_CROSSCOMPILING_EMULATOR="/home/<MYUSERNAME>/emsdk/node/12.18.1_64bit/bin/node"
```

Use this method to obtain the correct emcmake parameter path first

## React Section

Compile the C++ part to the wasm module and generate the glue code.

Since the automatically generated glue code does not conform to the code specification defined by eslint, you need to use /* eslint-disable */code hints that close the entire file to pass the compilation.

```javascript
/* eslint-disable */
var Module = (function() {
  var _scriptDir = "";
  
  ...
  
export default Module;
/* eslint-disable */
```

Since canvas must be an immutable dom, to prevent dom changes caused by react re-rendering, you need to use useRef to obtain an immutable original dom.

```javascript
export default function WebGLComponent(props) {
    const canvas = useRef();

    ...

    return (
        <>
            <canvas id="wasm" width={800} height={600} ref={canvas}></canvas>
        </>
    );
}
```

Use the effect hook to initialize the wasm context. It should be noted that the default state is undefined, and the export function can be called after the initialization is complete.

```javascript
    const [context, setContext] = useState(undefined);

    useEffect(() => {
        let Module = { canvas: canvas.current };
        wasmModuleBuilder.default(Module).then((result) => setContext(result));
    }, []);
```

