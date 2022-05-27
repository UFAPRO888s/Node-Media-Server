const NodeMediaServer = require('node-media-server');
//const fs = require('fs');


const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,

  },
  http: {
    port: 8000,
    mediaroot: './media',
    allow_origin: '*',
    api: true
  },
  https: {
    port: 8443,
    key: 'D:\\LIVEMASTERALL\\Node-Media-Server\\bin\\privatekey.pem',
    cert: 'D:\\LIVEMASTERALL\\Node-Media-Server\\bin\\certificate.pem',
    //key: './privatekey.pem',
    //cert: './certificate.pem',
  },
  trans: {
    //ffmpeg: '/usr/local/bin/ffmpeg',
    ffmpeg: "C:\\ffmpeg\\bin\\ffmpeg.exe",
    tasks: [
      {
        app: 'livefacebook',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: true,
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
      }
    ]
  },
  //   // tasks: [
  //   //   {
  //   //     app: 'live',
  //   //     hls: true,
  //   //     hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
  //   //     dash: true,
  //   //     dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
  //   //   },
  //   // ],
  // },
  relay: {
    //ffmpeg: '/usr/bin/ffmpeg',
    ffmpeg: "C:\\ffmpeg\\bin\\ffmpeg.exe",
    tasks: [
      {
        app: 'livefacebook',
        mode: 'static',
        edge: 'https://s1-d8.servers.video/mp4/M11185.mp4',
        name: 'M11185'
      },
      {
        app: 'livefacebook1',
        mode: 'static',
        edge: 'https://s1-d8.servers.video/mp4/M11147.mp4',
        name: 'M11147'
      }
    ]
  }
  // ,trans: {
  //   ffmpeg: '/usr/local/bin/ffmpeg',
  //   tasks: [
  //     {
  //       app: 'live',
  //       hls: true,
  //       hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
  //       dash: true,
  //       dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
  //     }
  //   ]
  // }
};


let nms = new NodeMediaServer(config);

nms.run();

nms.on('preConnect', (id, args) => {
  console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postConnect', (id, args) => {
  console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('doneConnect', (id, args) => {
  console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('prePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postPublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('donePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('prePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postPlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('donePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});
