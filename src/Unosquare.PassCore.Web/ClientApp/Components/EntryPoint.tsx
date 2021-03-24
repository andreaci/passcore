import * as React from 'react';
import { ChangePassword } from './ChangePassword';

export const EntryPoint: React.FunctionComponent<any> = () => (
    <React.Fragment>

        <main
            style={{
                marginLeft: 'calc((100% - 650px)/2)',
            }}
        >
            <ChangePassword />
        </main>
    </React.Fragment>
);
