@extends('layouts.auth')

@section('content')
                
                {{-- FORM LOGIN/SIGN IN --}}
                <div class="text-center">
                <b>Permintaan verifikasi berhasil dikirim</b>
                <p class="font-weight-light" style="font-size: 10pt">Mohon cek email Anda untuk melanjutkan verifikasi</p>
                <a href="/login" class="text-primary">Kembali ke halaman login</a>                    
                </div>



@endsection