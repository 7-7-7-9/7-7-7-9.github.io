const beforeUnloadEnabled = localStorage.getItem('beforeUnloadEnabled') === 'true';
if (beforeUnloadEnabled) {
self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://bare-sigma.yourmom.us.kg/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};

const beforeUnloadEnabled = localStorage.getItem('beforeUnloadEnabled') === 'false';
if (beforeUnloadEnabled) {
self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://example.com/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
