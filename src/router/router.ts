/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/main/main.vue'),
        children: [
            {
                path: '/bridgeMian',
                name: 'bridgeMain',
                redirect: '/bridgeMian/bridge',
                component: () => import('@/views/bridgeMain/bridgeMain.vue'),
                children: [
                    {
                        path: '/bridgeMian/bridge',
                        name: 'bridge',
                        component: () => import('@/views/bridgeSafetyInspection/bridgeSafetyInspection.vue')
                    },
                    {
                        path: '/bridgeMian/cableStayedBridge',
                        name: 'cableStayedBridge',
                        component: () => import('@/views/cableStayedBridge/cableStayedBridge.vue')
                    },
                    {
                        path: '/bridgeMian/girderBridge',
                        name: 'girderBridge',
                        component: () => import('@/views/girderBridge/girderBridge.vue')
                    }
                ]
            },
            {
                path: '/feedPipeMonitor',
                name: 'feedPipeMonitor',
                component: () => import('@/views/feedPipeMonitor/feedPipeMonitor.vue')
            },
            {
                path: '/thermalTubeMonitor',
                name: 'thermalTubeMonitor',
                component: () => import('@/views/thermalTubeMonitor/thermalTubeMonitor.vue')
            },
            {
                path: '/drainPipeMonitor',
                name: 'drainPipeMonitor',
                component: () => import('@/views/drainPipeMonitor/drainPipeMonitor.vue')
            },
            {
                path: '/gasPipeMonitor',
                name: 'gasPipeMonitor',
                component: () => import('@/views/gasPipeMonitor/gasPipeMonitor.vue')
            },
            {
                path: '/waterPipeMonitor',
                name: 'waterPipeMonitor',
                component: () => import('@/views/waterPipeMonitor/waterPipeMonitor.vue')
            }
        ]
    }
]