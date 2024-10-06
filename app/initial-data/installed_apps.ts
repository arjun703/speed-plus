export interface TransferSize {
    value: number;        
    unit: string;
}

export interface LoadTime {
    value: number;         
    unit: string;
}

export interface AverageLoadTime {
    desktop: LoadTime;      
    mobile: LoadTime;       
}

export interface InstalledAppType{
    severity: 'normal' | 'critical' | 'info';
    app_logo_url: string;
    app_name: string;
    transfer_size: TransferSize;
    last_usage: string;
    average_load_time: AverageLoadTime;
    app_handle: string;
} 

export const installed_apps:InstalledAppType[] = [
		
    {
        severity: 'normal',

        app_logo_url: 'https://w7.pngwing.com/pngs/959/454/png-transparent-tiktok-logo-thumbnail.png',

        app_name: 'TikTok',
        
        transfer_size: {
            value: 3,
            unit: 'KiB'
        },
        
        last_usage: '1h ago',
        
        average_load_time: {
            
            desktop: {
                value: 100,
                unit: 'ms'
            },
            
            mobile: {
                value: 15,
                unit: 'ms'
            }

        },
        

        app_handle: 'stamped_io'

    },	    
    
    {
        severity: 'normal',

        app_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321',

        app_name: 'Pinterest',
        
        transfer_size: {
            value: 43,
            unit: 'KiB'
        },
        
        last_usage: '14h ago',
        
        average_load_time: {
            
            desktop: {
                value: 255,
                unit: 'ms'
            },
            
            mobile: {
                value: 2,
                unit: 'ms'
            }

        },
        

        app_handle: 'stamped_io'

    },			
    
    {
        app_handle: 'google',

        severity: 'critical',

        app_logo_url: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',

        app_name: 'Google',
        
        transfer_size: {
            value: 111,
            unit: 'KiB'
        },
        
        last_usage: '8h ago',
        
        average_load_time: {
        
            desktop: {
                value: 18,
                unit: 's'
            },
        
            mobile: {
                value: 14,
                unit: 's'
            }
        
        },
        
    }
]