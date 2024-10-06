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

        app_logo_url: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',

        app_name: 'Stamped.io',
        
        transfer_size: {
            value: 43,
            unit: 'KiB'
        },
        
        last_usage: '14h ago',
        
        average_load_time: {
            
            desktop: {
                value: 1,
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

        app_name: 'Stamped.io',
        
        transfer_size: {
            value: 11,
            unit: 'KiB'
        },
        
        last_usage: '1h ago',
        
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