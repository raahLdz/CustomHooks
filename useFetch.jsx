import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const useFetch = ( url ) => {
    
    const isMounted = useRef( true )
    const [state, setstate] = useState({ data: null, loading: true, error: null });


    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setstate({ data: null, loading: true, error: null })
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                if ( isMounted.current ) {
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
    }, [ url ]);

    return state
}

useFetch.propTypes = {

}

export default useFetch
