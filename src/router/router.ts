/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
    {
        path: '/',
        redirect: '/bridgeMian'
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
            },
            {
                path: '/equipAssetManage',
                name: 'equipAssetManage',
                redirect: '/equipAssetManage/hydrogenSulfideMonitor',
                component: () => import('@/views/equipAssetManage/equipAssetManage.vue'),
                children: [
                    {
                        path: '/equipAssetManage/waterSupply',
                        name: 'waterSupply',
                        component: () => import('@/views/waterSupply/waterSupply.vue')
                    },
                    {
                        path: '/equipAssetManage/hydrogenSulfideMonitor',
                        name: 'hydrogenSulfideMonitor',
                        component: () => import('@/views/hydrogenSulfideMonitor/hydrogenSulfideMonitor.vue')
                    },
                    {
                        path: '/equipAssetManage/starinSensor',
                        name: 'starinSensor',
                        component: () => import('@/views/strainSensor/strainSensor.vue')
                    },
                    {
                        path: '/equipAssetManage/acceleraSensor',
                        name: 'acceleraSensor',
                        component: () => import('@/views/acceleraSensor/acceleraSensor.vue')
                    },
                    {
                        path: '/equipAssetManage/humiditySensor',
                        name: 'humiditySensor',
                        component: () => import('@/views/humiditySensor/humiditySensor.vue')
                    },
                    {
                        path: '/equipAssetManage/temperatureSensor',
                        name: 'temperatureSensor',
                        component: () => import('@/views/temperatureSensor/temperatureSensor.vue')
                    },
                    {
                        path: '/equipAssetManage/vehicleLoadSensor',
                        name: 'vehicleLoadSensor',
                        component: () => import('@/views/vehicleLoadSensor/vehicleLoadSensor.vue')
                    },
                    {
                        path: '/equipAssetManage/deflectionSensor',
                        name: 'deflectionSensor',
                        component: () => import('@/views/deflectionSensor/deflectionSensor.vue')
                    },
                    {
                        path: '/equipAssetManage/anemometer',
                        name: 'anemometer',
                        component: () => import('@/views/anemometer/anemometer.vue')
                    },
                    {
                        path: '/equipAssetManage/bridgeAccelera',
                        name: 'bridgeAccelera',
                        component: () => import('@/views/bridgeAccelera/bridgeAccelera.vue')
                    },
                    {
                        path: '/monitorAlarm',
                        name: 'monitorAlarm',
                        component: () => import('@/views/monitorAlarm/monitorAlarm.vue')
                    }
                ]
            },
            {
                path: '/thermodynamicChart',
                name: 'thermodynamicChart',
                component: () => import('@/views/thermodynamicChart/thermodynamicChart.vue')
            },
        ]
    }
]