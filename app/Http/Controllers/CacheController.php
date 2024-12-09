<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CacheController extends Controller
{
    public function index()
    {
        $data = Cache::get('cache','Data Tidak Ditemukan');
        return Inertia::render('Cache/Cache', ['datas' => $data, 'status' => session('status')]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'coba' => 'required',
        ]);
        
        Cache::put('cache', $validated['coba'], now()->addMinute(1));
        return redirect()->route('cache.index')->with('status', 'Cache Tersimpan');
    }

    public function destroy()
    {
        Cache::forget('cache');
        Log::info('Cache dihapus');
        return redirect()->route('cache.index')->with('status', 'Cache dihapus');
    }
}
